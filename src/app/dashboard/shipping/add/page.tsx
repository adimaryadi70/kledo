import '../shipping.css';
import LayoutDashboard from "../../page";
import * as React from "react";
import { FormShipping } from '@/components/shipping/form-shipping';

export default function AddShipping() {
    return (
        <LayoutDashboard>
            <FormShipping isEdit={false} title={'Tambah Shipping Comps'} />
        </LayoutDashboard>
    )
}
