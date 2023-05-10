import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    form!: FormGroup
    fb: FormBuilder = inject(FormBuilder)

    ngOnInit(): void {
        this.form = this.fb.group({
            name: this.fb.control('', [Validators.required]),
            email: this.fb.control('', [Validators.required]),
        })
    }









    /* numList: number[] = []

    processNumber(n: number) {
        console.info('number from num-input:', n)
        this.numList = [ ...this.numList, n ] // create new array, copy every element, then add n
        // this.numList.push(n)
        // this.numList.pop()
        // this.numList.unshift(n)
        // this.numList.shift() different methods of adding/removing numbers from queue
    } */

}
