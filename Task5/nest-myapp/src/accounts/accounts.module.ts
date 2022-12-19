import { Module } from '@nestjs/common';
import { SavingsModule } from './savingsAccount/savings.module';
import { CurrentModule } from './currentAccount/current.module';

@Module({
  imports: [CurrentModule, SavingsModule],
})
export class AccountModule {
  constructor() {
    console.log(`account module`);
  }
}