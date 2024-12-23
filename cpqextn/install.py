import frappe

def after_install():
    
    cpq_sidebar_fields_layouts = {
        "Design-Side Panel": {
            "doctype": "Design",
            "layout": '[{"label":"Design Information","name":"design_information","opened":true,"fields":["design_template","status","item"]},{"label":"Design Attributes","name":"design_attributes_tab","opened":true,"fields":[{"name":"design_attributes","options":"Item Variant Attribute","type":"Table","link":"Item Attribute Value"}]},{"label":"Price List","name":"price_list","opened":true,"fields":["direct_material_cost","total_cost"]},{"label":"Ownership","name":"ownership_tab","opened":true,"fields":["created_by"]}]'
        },
        "Item-Side Panel": {
            "doctype": "Item",
            "layout": '[{"label":"Detail","name":"detail","opened":true,"fields":["item_code","item_name","item_group"]},{"label":"Item Attributes","name":"item_attributes","opened":true,"fields":[{"name":"attributes","options":"Item Variant Attribute","type":"Table","link":"Item Attribute Value"}]}]'
        },
        "Quotation-Side Panel": {
            "doctype": "Quotation",
            "layout": '[{"label":"Detail","name":"detail","fields":["quotation_to","party_name","customer_name","transaction_date","valid_till","order_type"]},{"label":"Currency and Price List","name":"currency_and_price_list","fields":["currency","selling_price_list"]},{"label":"Total","name":"total","fields":["total_qty","total","net_total","grand_total"]},{"label":"Additional Discount","name":"additional_discount","opened":false,"fields":["apply_discount_on","additional_discount_percentage","discount_amount"]}]'
        },
    }

    cpq_quick_entry_layouts = {
        "Quotation-Quick Entry": {
            "doctype": "Quotation",
            "layout": '[{"label":"Details","fields":["quotation_to","party_name","transaction_date","valid_till","status"],"columns":3,"hideLabel":true,"hideBorder":false},{"label":"Currency and Price List","fields":["currency","selling_price_list"],"columns":2,"hideLabel":false,"hideBorder":false}]'
        }
    }

    for layout in cpq_sidebar_fields_layouts:
        if frappe.db.exists("CRM Fields Layout", layout):
            continue

        doc = frappe.new_doc("CRM Fields Layout")
        doc.type = "Side Panel"
        doc.dt = cpq_sidebar_fields_layouts[layout]["doctype"]
        doc.layout = cpq_sidebar_fields_layouts[layout]["layout"]
        doc.insert()

    for layout in cpq_quick_entry_layouts:
        if frappe.db.exists("CRM Fields Layout", layout):
            continue

        doc = frappe.new_doc("CRM Fields Layout")
        doc.type = "Quick Entry"
        doc.dt = cpq_quick_entry_layouts[layout]["doctype"]
        doc.layout = cpq_quick_entry_layouts[layout]["layout"]
        doc.insert()
