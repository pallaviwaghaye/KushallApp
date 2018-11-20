import { NgModule } from '@angular/core';
import { UppercasePipe } from './uppercase/uppercase';
@NgModule({
	declarations: [UppercasePipe],
	imports: [],
	exports: [UppercasePipe]
})
export class PipesModule {}
