
exports.up = function(knex) {
  
    return knex.schema.createTable('tbl_questionario', function(table){
        table.increments('id_questionario').primary().notNullable().unique();
        table.integer('pergunta_1_fk').notNullable();
        table.integer('pergunta_2_fk').notNullable();
        table.integer('pergunta_3_fk').notNullable();
        table.boolean('pergunta_4').notNullable();
        table.boolean('pergunta_5').notNullable();
        table.boolean('pergunta_6').notNullable();
        table.integer('pergunta_7').notNullable();
        table.boolean('pergunta_8').notNullable();
        table.boolean('pergunta_9').notNullable();
        table.boolean('pergunta_10').notNullable();
        table.boolean('pergunta_11').notNullable();
        table.boolean('pergunta_12').notNullable();
        table.boolean('pergunta_13').notNullable();
        table.boolean('pergunta_14').notNullable();
        table.boolean('pergunta_15').notNullable();
        table.boolean('pergunta_16').notNullable();
        table.boolean('pergunta_17').notNullable();
        table.foreign('pergunta_1_fk').references('tbl_pergunta1.id_pergunta1');
        table.foreign('pergunta_2_fk').references('tbl_pergunta2.id_pergunta2');
        table.foreign('pergunta_3_fk').references('tbl_pergunta3.id_pergunta3');
    });
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('tbl_questionario');
};
