import { PipeTransform, Pipe } from '@angular/core'

@Pipe({name: 'concatFields'})
export class ConcatPipe implements PipeTransform {
    
    transform(value: any, ...fields: string[]): string {
        const res = [];

        fields.forEach(field => {
            if (value[field] !== undefined) {
                res.push(`${field}: ${value[field]}`);
            }
        })

        return res.join(', ');
    }
}