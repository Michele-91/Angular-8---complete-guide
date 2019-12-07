import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html'
})

export class AssignmentComponent {

    username = '';

    constructor() {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
    }

    onReset() {
        this.username = '';
    }

}
