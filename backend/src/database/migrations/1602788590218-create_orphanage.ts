import {MigrationInterface, QueryRunner, Table} from "typeorm";
export class createOrphanage1602788590218 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // realizar alterações
        // criar tabela, criar um novo campo, deletar campo
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'float',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'float',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // desfazer o que foi feito
        await queryRunner.dropTable('orphanages');
    }
}