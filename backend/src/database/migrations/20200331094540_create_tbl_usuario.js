
exports.up = function(knex) {
  
    return knex.schema.createTable('tbl_usuario', function(table){
        table.increments('id_usuario').primary().notNullable().unique();
        table.string('nome_usuario', 25).notNullable();
        table.string('sobrenome_usuario', 40).notNullable();
        table.string('email_usuario').notNullable().unique();
        table.string('senha_usuario').notNullable();
        table.string('cpf_usuario', 14).notNullable().unique();
        table.boolean('sexo_usuario').notNullable();
        table.date('data_nascimento_usuario').notNullable();
        table.string('telefone_usuario').notNullable();
        table.string('pais_usuario').notNullable();
        table.string('estado_usuario', 2).notNullable();
        table.string('cidade_usuario').notNullable();
        table.boolean('role_usuario').notNullable();
        table.integer('questionario_fk').notNullable().unique();
        table.foreign('questionario_fk').references('tbl_questionario.id_questionario');
    });
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('tbl_usuario');
};
