
exports.up = function(knex) {
  
    return knex.schema.createTable('tbl_pergunta1', function(table){
        table.increments('id_pergunta1').primary().notNullable().unique();
        table.integer('cor_pele').notNullable();
    });
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('tbl_pergunta1');
};
