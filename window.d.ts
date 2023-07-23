import * as Plupload from "plupload";

// TODO type ...any better (e.g. provide a way to for the caller to declare what these arguments should be).
export type HookCallback = (...args: any[]) => void;

declare global {
	interface Window {
		jQuery: JQueryStatic;

		// Form Editor
		field: GFField;
		fieldSettings: { [fieldType: string]: string };
		form: GFForm;
		UpdateFieldChoices: (fieldType: string) => void;
		SetFieldProperty: (setting: string, value: any) => void;
		SetFieldEnhancedUI: (enabled: boolean) => void;
		GetSelectedField: () => GFField;
		GetFieldById: (fieldId: GFFieldID) => GFField;
		GetLabel: (
			field: GFField,
			inputId?: number,
			inputOnly?: boolean
		) => string;
		has_entry: (fieldId: GFFieldID) => boolean;
		IsPricingField: (fieldType: string) => boolean;
		IsProductField: (fieldType: string) => boolean;
		HasPageField: () => boolean;
		HasPostField: () => boolean;
		ToggleMultiFile: (isInit: boolean) => void;
		GetInputType: (field: GFField) => string;
		SetFieldPhoneFormat: (format: string) => void;

		// Frontend
		gform: {
			addAction: (
				actionName: string,
				cb: HookCallback,
				priority?: number,
				tag?: string
			) => void;
			removeAction: (actionName: string, tag?: string) => void;
			addFilter: (
				filterName: string,
				cb: HookCallback,
				priority?: number,
				tag?: string
			) => void;
			removeFilter: (
				filterName: string,
				priority?: number,
				tag?: string
			) => void;
			doAction: (actionName: string, ...args: any[]) => void;
			applyFilters: <S>(
				filterName: string,
				subject: S,
				...args: any[]
			) => S;
		};

		gformCalculateTotalPrice: (formId: string | number) => void;

		gfMultiFileUploader: {
			uploaders: { [name: string]: Plupload.Uploader };
			setup: Function;
			toggleDisabled: Function;
		};

		gformDeleteUploadedFile: (
			formId: string,
			fieldId: string,
			deleteButton: HTMLElement
		) => void;

		mOxie: any;

		// Placeholders
		gfMergeTagsObj: any;
		gf_raw_input_change: any;
		gf_check_field_rule: any;
		gf_global: any;
		gf_vars: any;
		gformInitChosenFields: any;
		ToggleCalculationOptions: any;
		gformInitDatepicker: any;
		GFCalc: any;
		GFMergeTag: any;
		gfAjaxSpinner: any;
		gformIsHidden: any;
		gf_form_conditional_logic: any;
		Currency: any;
		gf_matches_operation: any;
		gf_apply_rules: any;
	}

	interface String {
		// Deprecated, being removed in GF 2.8.
		format: (...format: any[]) => string;

		gformFormat: (...format: any[]) => string;
	}
}

export {};
