from crm.crm.install import add_default_fields_layout
import frappe

def after_install():
    # Call the original function to add default layouts
    add_default_fields_layout()
    
    #lenscpq sidebar pannel
    cpq_sidebar_fields_layouts = {
        "Design-Side Panel": {
            "doctype": "Design",
            "layout": '[{"label": "Design Information", "name": "design_information", "opened": true, "fields": ["design_template", "status"]}, {"label": "Design Attributes", "name": "design_attributes_tab", "opened": true, "fields": [{"name": "design_attributes", "options": "Item Variant Attribute", "type": "Table", "link": "Item Attribute Value"}]}, {"label": "Ownership", "name": "ownership_tab", "opened": true, "fields": ["created_by"]}]'
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
