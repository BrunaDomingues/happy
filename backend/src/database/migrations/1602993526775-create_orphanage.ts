import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanage1602993526775 implements MigrationInterface {
    // realizar alterações
    // criar tabela, criar um novo campo, deletar campo
    public async up(queryRunner: QueryRunner): Promise<void> {
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
                    name: 'opening_hours',
                    type: 'varchar'
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
