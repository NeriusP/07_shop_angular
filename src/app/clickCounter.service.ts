import { EventEmitter } from "@angular/core";

export class ClickCounter {
    private count: number = 0;

    onClick = new EventEmitter<string>();

    click(){
        this.count++;
        console.log("Paspaudėme: " + this.count + " kartų");
    }
}