import { Module } from '@nestjs/common';

@Module({})
export class SavingsModule {
  constructor() {
    console.log(`savings account module`);
  }
}