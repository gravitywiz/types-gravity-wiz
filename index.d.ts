import * as Plupload from "plupload";

declare global {
	type GFFieldID = number | string;
	type GFFormID = number | string;

	// TODO type ...any better (e.g. provide a way to for the caller to declare what these arguments should be).
	type GFHookCallback = (...args: any[]) => void;

	interface GFField {
		inputs: any;
		choices: GFChoice[];
		label: string;
		adminLabel?: string;
		id: number;
		formId: number;
		type: string;
		enableEnhancedUI?: boolean;
		inputType: string;
		productId: string;
	}

	interface GFChoice {
		isSelected?: boolean;
		price?: string;
		text: string;
		value: string;
	}

	interface GFForm {
		button: {
			type: string;
			text: string;
			imageUrl: string;
		};
		confirmations: any;
		description: string;
		descriptionPlacement: string;
		fields: GFField[];
		firstPageCssClass: string;
		id: number;
		labelPlacement: string;
		lastPageButton: string;
		markupVersion: number;
		nextFieldId: number;
		notifications: any;
		pagination: any;
		postContentTemplate: string;
		postContentTemplateEnabled: boolean;
		postTitleTemplate: string;
		postTitleTemplateEnabled: boolean;
		title: string;
		useCurrentUserAsAuthor: boolean;
		version: string;
		[key: string]: any;
	}

	class GFConditionalLogic {
		actionType: GFConditionalLogicActionType;
		logicType: GFConditionalLogicLogicType;
		rules: GFConditionalLogicRule[];
	}

	interface GFCurrencyConfig {
		name: string;
		symbol_left: string;
		symbol_right: string;
		symbol_padding: string;
		thousand_separator: string;
		decimal_separator: string;
		decimals: number
		code: string;
	}

	class GFCurrency {
		constructor(currency: GFCurrencyConfig);
		toNumber(text: string): number;
		toMoney(number: string | number, isNumeric?: boolean): string;
	}

	interface GFConditionalLogicRuleField {
		label: string;
		value: string | number;
	}

	interface GFConditionalLogicRule {
		fieldId: string;
		operator: string;
		value: number | string;
	}
	
	type GFConditionalLogicOperators = 'is' | 'isnot' | '>' | '<' | 'contains' | 'starts_with' | 'ends_with';

	type GFConditionalLogicLogicType = 'all' | 'any';


	type GFConditionalLogicActionType = 'show' | 'hide';

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
		ToggleConditionalLogic: (isInit: boolean, objectType: string) => void;
		GetInputType: (field: GFField) => string;
		SetFieldPhoneFormat: (format: string) => void;

		// Frontend
		gform: {
			addAction: (
				actionName: string,
				cb: GFHookCallback,
				priority?: number,
				tag?: string
			) => void;
			removeAction: (actionName: string, tag?: string) => void;
			addFilter: (
				filterName: string,
				cb: GFHookCallback,
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

		ConditionalLogic: typeof GFConditionalLogic;

		Currency: typeof GFCurrency;

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

		gformFormatMoney: (text: number | string, isNumeric?: boolean) => string;

		gformToNumber(text: string): number;

		gf_global: {
			base_url: string;
			gf_currency_config: GFCurrencyConfig;
			number_formats: Array<any>; // placeholder
			spinnerUrl: string;
			strings: { [key: string]: string };
			version_hash: string;
		};

		// Placeholders
		mOxie: any;
		gfMergeTagsObj: any;
		gf_raw_input_change: any;
		gf_check_field_rule: any;
		gf_vars: any;
		gformInitChosenFields: any;
		ToggleCalculationOptions: any;
		gformInitDatepicker: any;
		GFCalc: any;
		GFMergeTag: any;
		gfAjaxSpinner: any;
		gformIsHidden: any;
		gf_form_conditional_logic: any;
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
