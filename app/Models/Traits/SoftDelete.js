class SoftDelete {
  register(Model, customOptions = {}) {
    const deletedAtColumn = customOptions.name || `${Model.table}.deleted_at`;

    Model.addGlobalScope(builder => {
      builder.whereNull(deletedAtColumn);
    }, 'adonis_soft_delete');

    Model.queryMacro('withTrashed', function () {
      this.ignoreScopes('adonis_soft_delete');
      return this;
    });

    Model.queryMacro('onlyTrashed', function () {
      this.ignoreScopes('adonis_soft_delete');
      this.whereNotNull(deletedAtColumn);
      return this;
    });

    Model.prototype.delete = async function () {
      this[deletedAtColumn] = new Date();
      await this.save();
    };

    Model.prototype.restore = async function () {
      this[deletedAtColumn] = null;
      await this.save();
    };

    Model.prototype.forceDelete = async function () {
      await Model.query()
        .where(Model.primaryKey, this[Model.primaryKey])
        .ignoreScopes()
        .delete();
    };
  }
}

module.exports = SoftDelete;