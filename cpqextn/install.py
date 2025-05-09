import frappe

def after_install(force=False):
	fn_add_default_fields_layout(force)
	
def fn_add_default_fields_layout(force=False):
	ld_quick_entry_layouts = {
		"Item-Quick Entry": {
			"doctype": "Item",
			"layout": '[{"name":"first_tab","sections":[{"name":"item_section","columns":[{"name":"column_5jrk","fields":["item_code","item_name"]},{"name":"column_5CPV","fields":["item_group","stock_uom"]}]},{"name":"item_attribute","columns":[{"name":"column_5jrk","fields":["attributes"]}]}]}]',
		},
		"Quotation-Quick Entry": {
			"doctype": "Quotation",
			"layout": '[{"name":"first_tab","sections":[{"name":"quotation_section","columns":[{"name":"column_5jrk","fields":["quotation_to","party_name"]},{"name":"column_5CPV","fields":["transaction_date"]}]},{"name":"currency_and_price List","columns":[{"name":"column_5jrk","fields":["currency"]},{"name":"column_5jrk","fields":["selling_price_list"]}]},{"label":"New Section","name":"section_JwOX","opened":true,"columns":[{"name":"column_cTLW","fields":["items"]}]}]}]',
		}
	}

	ld_sidebar_fields_layouts = {
		"Design-Side Panel": {
			"doctype": "Design",
			"layout": '[{"label":"Design Information","name":"design_information","opened":true,"columns":[{"name":"column1","fields":["design_template","status","item"]}]},{"label":"Price List","name":"price_list","opened":true,"columns":[{"name":"column1","fields":["direct_material_cost","total_cost"]}]},{"label":"Ownership","name":"ownership_tab","opened":true,"columns":[{"name":"column1","fields":["created_by"]}]}]',
		},
		"Item-Side Panel": {
			"doctype": "Item",
			"layout": '[{"label":"Item Details","name":"item_details","opened":true,"columns":[{"name":"column1","fields":["item_code","item_name","item_group","stock_uom"]}],"showEditButton":true,"visible":4}]',
		},
		"Quotation-Side Panel": {
			"doctype": "Quotation",
			"layout": '[{"label":"Quotation Details","name":"quotation_details","opened":true,"columns":[{"name":"column1","fields":["quotation_to","party_name","customer_name","transaction_date","valid_till","order_type"]}],"showEditButton":true,"visible":6},{"label":"Currency and Price List","name":"currency_and_pricelist","opened":true,"columns":[{"name":"column1","fields":["currency","selling_price_list"]}],"showEditButton":true,"visible":2},{"label":"Total","name":"total","opened":true,"columns":[{"name":"column1","fields":["total_qty","total","net_total","grand_total"]}],"showEditButton":true,"visible":2},{"label":"Additional Discount","name":"additional_discount","opened":true,"columns":[{"name":"column1","fields":["total_qty","total","apply_discount_on","additional_discount_percentage","discount_amount"]}],"showEditButton":true,"visible":2}]',
		},
		"CRM Lead-Side Panel": {
			"doctype": "CRM Lead",
			"layout": '[{"label":"Details","name":"details_section","opened":true,"columns":[{"name":"column_kl92","fields":["organization","website","territory","industry","job_title","source","lead_owner","no_of_employees"]}]},{"label":"Person","name":"person_section","opened":true,"columns":[{"name":"column_XmW2","fields":["salutation","first_name","last_name","email","mobile_no"]}]}]',
		}
	}

	ld_data_fields_layouts = {
		"Design-Data Fields": {
			"doctype": "Design",
			"layout": '[{"name":"tab_DoQF","sections":[{"name":"section_hWFE","columns":[{"name":"column_OOsl","fields":["design_attributes"]}]}]}]',
		},
		"Item-Data Fields": {
			"doctype": "Item",
			"layout": '[{"name":"tab_5if5","sections":[{"name":"section_Axge","columns":[{"name":"column_PSU4","fields":["is_stock_item","auto_create_assets"]}]},{"name":"section_6cua","columns":[{"name":"column_ihfy","fields":["description","brand"]}]},{"name":"section_kqgy","columns":[{"name":"column_sSU8","fields":["attributes"]}]}]},{"name":"tab_8dGd","sections":[{"name":"section_LLTT","columns":[{"name":"column_jmkI","fields":[]}]}]},{"name":"tab_AJXj","sections":[{"name":"section_85JY","columns":[{"name":"column_X0ZV","fields":[]}]},{"name":"section_tKW5","columns":[{"name":"column_6Vvf","fields":["shelf_life_in_days","end_of_life","default_material_request_type","valuation_method"]},{"name":"column_hRdb","fields":["warranty_period","weight_per_unit","weight_uom","allow_negative_stock"]}]},{"name":"section_Kvoo","columns":[{"name":"column_HJ8K","fields":["barcodes"]}]},{"name":"section_cuQr","columns":[{"name":"column_Tpyi","fields":["reorder_levels"]}]},{"name":"section_vw9l","columns":[{"name":"column_KSLH","fields":["has_batch_no","create_new_batch","batch_number_series","has_expiry_date","retain_sample","sample_quantity"]},{"name":"column_hSXd","fields":["has_serial_no","serial_no_series"]}]}]},{"name":"tab_VTDJ","sections":[{"name":"section_2hXV","columns":[{"name":"column_Zip6","fields":["variant_of","variant_based_on","attributes"]}]}]},{"name":"tab_8fUi","sections":[{"name":"section_wjvU","columns":[{"name":"column_3Yp0","fields":[]}]},{"name":"section_QsAS","columns":[{"name":"column_MC8G","fields":["enable_deferred_expense","no_of_months_exp"]},{"name":"column_IQkw","fields":["enable_deferred_revenue","no_of_months"]}]},{"name":"section_o0il","columns":[{"name":"column_b9KF","fields":["item_defaults"]}]}]},{"name":"tab_kOJN","sections":[{"name":"section_fusT","columns":[{"name":"column_rfXP","fields":["purchase_uom","min_order_qty","safety_stock","is_purchase_item"]},{"name":"column_ejAq","fields":["lead_time_days","last_purchase_rate","is_customer_provided_item","customer"]}]},{"name":"section_Il6x","columns":[{"name":"column_3j9I","fields":["delivered_by_supplier"]},{"name":"column_0nbt","fields":["supplier_items"]}]},{"name":"section_98hN","columns":[{"name":"column_qRvQ","fields":["country_of_origin"]},{"name":"column_GW07","fields":["customs_tariff_number"]}]}]},{"name":"tab_gI4T","sections":[{"name":"section_MMI5","columns":[{"name":"column_AwYD","fields":["sales_uom","grant_commission","is_sales_item"]},{"name":"column_6Wkp","fields":["max_discount"]}]},{"name":"section_OJQm","columns":[{"name":"column_IsdN","fields":["customer_items"]}]}]},{"name":"tab_826a","sections":[{"name":"section_luT4","columns":[{"name":"column_KnH5","fields":["taxes"]}]}]},{"name":"tab_D32F","sections":[{"name":"section_D5xH","columns":[{"name":"column_B0oD","fields":["inspection_required_before_purchase","quality_inspection_template","inspection_required_before_delivery"]}]}]},{"name":"tab_kBgD","sections":[{"name":"section_DVUf","columns":[{"name":"column_eRTP","fields":["include_item_in_manufacturing","is_sub_contracted_item","default_bom"]},{"name":"column_XQcC","fields":["customer_code","default_item_manufacturer","default_manufacturer_part_no","total_projected_qty"]}]}]}]',
		},
		"CRM Lead-Data Fields": {
			"doctype": "CRM Lead",
			"layout": '[{"name":"first_tab","sections":[{"label":"Tracker","name":"section_DdiP","opened":true,"columns":[{"name":"column_FScX","fields":["custom_question_type","custom_prompt","custom_lead_questionnaire"]}],"editingLabel":false}]}]',
		},
		"Quotation-Data Fields": {
			"doctype": "Quotation",
			"layout": '[{"name":"tab_ugJ4","sections":[{"name":"section_418P","columns":[{"name":"column_rTsE","fields":["items"]}]},{"name":"section_ZICI","columns":[{"name":"column_X1bf","fields":["total_qty","total_net_weight"]},{"name":"column_j5zc","fields":["base_total","base_net_total"]},{"name":"column_Oxup","fields":["total","net_total"]}]},{"name":"section_peH8","columns":[{"name":"column_KNVq","fields":["tax_category","taxes_and_charges"]},{"name":"column_n1vF","fields":["shipping_rule"]},{"name":"column_gu3c","fields":["incoterm","named_place"]}]},{"name":"section_SjBn","columns":[{"name":"column_4ZKG","fields":["taxes"]}]},{"name":"section_4NH9","columns":[{"name":"column_pQbh","fields":["base_total_taxes_and_charges"]},{"name":"column_9VoF","fields":["total_taxes_and_charges"]}]},{"name":"section_R7dN","columns":[{"name":"column_reVM","fields":["base_grand_total","base_rounding_adjustment","base_rounded_total","base_in_words"]},{"name":"column_2azM","fields":["grand_total","rounding_adjustment","rounded_total","disable_rounded_total","in_words"]}]},{"name":"section_ZScr","columns":[{"name":"column_Uco4","fields":["apply_discount_on","base_discount_amount","coupon_code"]},{"name":"column_HZz0","fields":["additional_discount_percentage","discount_amount","referral_sales_partner"]}]},{"name":"section_eEyy","columns":[{"name":"column_duaO","fields":["other_charges_calculation"]}]},{"name":"section_NaWc","columns":[{"name":"column_Iz3X","fields":["pricing_rules"]}]}]},{"name":"tab_ywjG","sections":[{"name":"section_uw2V","columns":[{"name":"column_esBB","fields":[]}]},{"name":"section_felE","columns":[{"name":"column_8zo2","fields":["customer_address","address_display"]},{"name":"column_BDRr","fields":["contact_person","contact_display","contact_mobile","contact_email"]}]},{"name":"section_M6So","columns":[{"name":"column_f4wz","fields":["shipping_address_name"]},{"name":"column_br9o","fields":["shipping_address"]}]},{"name":"section_frkQ","columns":[{"name":"column_tKI8","fields":["company_address","company_address_display"]},{"name":"column_aAw9","fields":["company_contact_person"]}]}]},{"name":"tab_GTLN","sections":[{"name":"section_1j2D","columns":[{"name":"column_0iKs","fields":[]}]},{"name":"section_uTN6","columns":[{"name":"column_LWPZ","fields":["payment_terms_template","payment_schedule"]}]},{"name":"section_3PC4","columns":[{"name":"column_O0nu","fields":["tc_name","terms"]}]}]},{"name":"tab_sXpK","sections":[{"name":"section_bct8","columns":[{"name":"column_LeTn","fields":[]}]},{"name":"section_9vZe","columns":[{"name":"column_8zAo","fields":["auto_repeat","update_auto_repeat_reference"]}]},{"name":"section_wnPf","columns":[{"name":"column_t4yN","fields":["letter_head","group_same_items"]},{"name":"column_wr3z","fields":["select_print_heading","language"]}]},{"name":"section_G3gZ","columns":[{"name":"column_I3nt","fields":["lost_reasons","competitors"]},{"name":"column_W4ol","fields":["order_lost_reason"]}]},{"name":"section_VzKQ","columns":[{"name":"column_PAwk","fields":["status","customer_group","territory"]},{"name":"column_oBEV","fields":["campaign","source"]},{"name":"column_TRib","fields":["opportunity","supplier_quotation","enq_det"]}]}]},{"name":"tab_2mVR","sections":[{"name":"section_kt06","columns":[{"name":"column_aEA6","fields":[]}]}]}]'
		}
	}

	#we have taken the key's value for each record
	for l_layout in ld_quick_entry_layouts:
		#if force and document exist delete them and processed
		# if not force the exist the function
		if frappe.db.exists("CRM Fields Layout", l_layout):
			if force:
				frappe.delete_doc("CRM Fields Layout", l_layout)
			else:
				continue

		#create a new document, and update the required field's value
		ld_doc = frappe.new_doc("CRM Fields Layout")
		ld_doc.type = "Quick Entry"
		ld_doc.dt = ld_quick_entry_layouts[l_layout]["doctype"]
		ld_doc.layout = ld_quick_entry_layouts[l_layout]["layout"]
		ld_doc.insert()

	#we have taken the key's value for each record
	for l_layout in ld_sidebar_fields_layouts:
		#if force and document exist delete them and processed
		# if not force the exist the function
		if frappe.db.exists("CRM Fields Layout", l_layout):
			if force:
				frappe.delete_doc("CRM Fields Layout", l_layout)
			else:
				continue

		#create a new document, and update the required field's value
		ld_doc = frappe.new_doc("CRM Fields Layout")
		ld_doc.type = "Side Panel"
		ld_doc.dt = ld_sidebar_fields_layouts[l_layout]["doctype"]
		ld_doc.layout = ld_sidebar_fields_layouts[l_layout]["layout"]
		ld_doc.insert()

	#we have taken the key's value for each record
	for l_layout in ld_data_fields_layouts:
		#if force and document exist delete them and processed
		# if not force the exist the function
		if frappe.db.exists("CRM Fields Layout", l_layout):
			if force:
				frappe.delete_doc("CRM Fields Layout", l_layout)
			else:
				continue
		
		#create a new document, and update the required field's value
		ld_doc = frappe.new_doc("CRM Fields Layout")
		ld_doc.type = "Data Fields"
		ld_doc.dt = ld_data_fields_layouts[l_layout]["doctype"]
		ld_doc.layout = ld_data_fields_layouts[l_layout]["layout"]
		ld_doc.insert()
