import { usePage } from "@inertiajs/react";

export default function ApplicationLogo() {
    const {general_setting}  = usePage().props;
    return (

        <>
            {<img src={ general_setting.logo} />}
        </>
    );
}
