import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-num-input',
    templateUrl: './num-input.component.html',
    styleUrls: ['./num-input.component.css']
})
export class NumInputComponent implements OnInit {

    form!: FormGroup

    @Output()
    onNewNumber = new Subject<number>

    ngOnInit(): void {
        this.form = this.createForm()
    }

    processForm() {
        const num = this.form.value['value']
        console.info('n =', num)
        this.onNewNumber.next(num)
        this.form = this.createForm()
    }

    private createForm(): FormGroup {
        return new FormGroup({
            value: new FormControl<number>(0, [Validators.required, Validators.min(-100), Validators.max(100)])
        })
    }

    invalid(): boolean {
        return this.form.invalid || this.form.value['value'] === 0
    }

    
}
