import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUrlTable1743192859305 implements MigrationInterface {
  name = 'CreateUrlTable1743192859305';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "url" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "slug" character varying NOT NULL, "originalUrl" character varying NOT NULL, "visits" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_acc2ee24a87898259c431c1716d" UNIQUE ("slug"), CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "url"`);
  }
}
