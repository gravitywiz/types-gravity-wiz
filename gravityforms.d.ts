/**
 * Type definitions for Gravity Forms.
 */
declare global {
	type GFFieldID = number | string;
	type GFFormID = number | string;

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

	interface GFConditionalLogicRuleField {
		label: string;
		value: string | number;
	}

	interface GFConditionalLogicRule {
		fieldId: string;
		operator: string;
		value: number | string;
	}
}

export {};
