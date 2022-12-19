import { Module } from '@nestjs/common';
import { LoanModule } from './loans/loans.module';
import { AccountModule } from './accounts/accounts.module';

@Module({
  imports: [AccountModule, LoanModule],
})
export class AppModule {
  constructor() {
    console.log(`App module`);
  }
}