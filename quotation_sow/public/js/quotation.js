frappe.ui.form.on('Quotation', {
    order_type:function(frm){
        if (frm.doc.order_type == "Statement of Work") {
            frm.set_df_property('scan_barcode', 'hidden', 1);
            frappe.call({
                method: "quotation_sow.quotation_sow.doctype.quotation.get_section_details",
                callback: function (r) {
                    if (r.message) {
                        $.each(r.message, function (i, v) {
                            let row = frm.add_child("custom_sow_section_item");
                            row.section = v.section;
                        });
                        refresh_field("custom_sow_section_item");
                    }
                }
            });
        }
    }
});