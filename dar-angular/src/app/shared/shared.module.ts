import { ConcatPipe } from '../shared/concat.pipe'
import { NgModule } from '@angular/core'

@NgModule({
    declarations: [
        ConcatPipe,
    ],
    exports:[
        ConcatPipe,
    ]
})

export class SharedModule { }