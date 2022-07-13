import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../interfaces/Hero.interface";

@Pipe({
  name: "enum",
})
export class EnumPipe implements PipeTransform {
  transform(value: number): string {
    return Color[value];
  }
}
