import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import Quill from 'quill';

/**
 * Small wrapper around https://github.com/KillerCodeMonkey/ngx-quill
 *
 */
@Component({
    selector: 'hlc-rich-text',
    templateUrl: './rich-text.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HlcClrRichTextComponent),
            multi: true
        }
    ]
})
export class HlcClrRichTextComponent implements OnInit, ControlValueAccessor {
    @Input() style: { [key: string]: any };
    @Input() placeholder: string;

    @Input()
    value: string | undefined;

    @Input()
    readonly: boolean;

    @ViewChild(QuillEditorComponent, { static: false }) editor: QuillEditorComponent;

    readonly modules: any;
    propagateChange = (_: any) => {};

    constructor() {

        this.modules = {
            toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'link', { list: 'ordered' }, { list: 'bullet' }, 'image', 'blockquote']
            ]
        };
    }

    ngOnInit() {}

    onModelChange(event: any) {
        this.value = event;
        this.propagateChange(this.value);
    }

    //

    writeValue(obj: any) {
        this.value = obj;
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(_: any) {}
}
