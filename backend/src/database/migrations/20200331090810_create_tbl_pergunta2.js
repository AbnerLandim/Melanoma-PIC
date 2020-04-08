
exports.up = function(knex) {
  
    return knex.schema.createTable('tbl_pergunta2', function(table){
        table.increments('id_pergunta2').primary().notNullable().unique();
        table.integer('cor_cabelo').notNullable();
    });
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('tbl_pergunta2');
};
