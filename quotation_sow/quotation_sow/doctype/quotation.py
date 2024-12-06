import frappe

@frappe.whitelist()
def get_section_details():
    sections = frappe.get_all("Quotation SoW Section",
                            fields=["section", "section_priority"],
                            order_by="section_priority ASC"
    )
    return sections if sections else []
