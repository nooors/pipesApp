import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "flies",
})
export class FlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? "the hero flies" : "the hero doesn't fly";
  }
}
