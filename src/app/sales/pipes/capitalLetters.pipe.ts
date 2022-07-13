import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capital",
})
export class CapitalLettersPipe implements PipeTransform {
  transform(value: string, inCapitals: boolean = true): string {
    return inCapitals ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
