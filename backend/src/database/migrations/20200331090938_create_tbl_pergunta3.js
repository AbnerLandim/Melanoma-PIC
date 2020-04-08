
exports.up = function(knex) {
  
    return knex.schema.createTable('tbl_pergunta3', function(table){
        table.increments('id_pergunta3').primary().notNullable().unique();
        table.integer('cor_olho').notNullable();
    });
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('tbl_pergunta3');
};
