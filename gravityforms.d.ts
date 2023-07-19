/**
 * Type definitions for Gravity Forms.
 */

export interface Form {
}

export interface Field {
    id: number
    formId: number
    type: string
    enableEnhancedUI: boolean
    choices: MultiSelectChoice[]
}

export interface MultiSelectChoice {
    isSelected: boolean;
    price: string;
    text: string;
    value: string;
}

// TODO type ...any better (e.g. provide a way to for the caller to declare what these arguments should be).
export type HookCallback = (...args: any[]) => void

declare global {
    interface Window {
        jQuery: JQueryStatic
        gform: {
            addAction: (actionName: string, cb: HookCallback, priority?: number, tag?: string) => void;
            addFilter: (filterName: string, cb: HookCallback, priority?: number, tag?: string) => void;
            doAction: (actionName: string, ...any) => void;
            applyFilters: (filterName: string, ...any) => any;
            removeAction: (actionName: string, tag?:string) => void;
            removeFilter: (actionName: string, priority?: number, tag?: string) => void;
        }
        field: Field
        form: Form
        UpdateFieldChoices: (fieldType: string) => void
        SetFieldProperty: (setting: string, value: any) => void
        SetFieldEnhancedUI: (enabled: boolean) => void
    }
}