import '../shipping.css';
import LayoutDashboard from "../../page";
import * as React from "react";
import { TrashIcon } from '@heroicons/react/outline';
import { FormShipping } from '@/components/shipping/form-shipping';

export default function Edit() {
    return (
        <LayoutDashboard>
            <FormShipping isEdit={true} title={'Edit Shipping'}/>
        </LayoutDashboard>
    )
}
