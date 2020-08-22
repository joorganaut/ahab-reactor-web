interface ValidateSSNResponse {
    status: 'invalid' | 'temporary' | 'valid';
}

export const ValidateSSN = (txtSIN: string): Promise<ValidateSSNResponse> => {
    const promise = new Promise<ValidateSSNResponse>(() => {
        let result: ValidateSSNResponse = { status: 'invalid' };
        let X = 0;
        let Y = 0;
        let L = 0;
        let T = 0;
        let H: any = 0;
        let Rounded_No = 0;
        let Sum_No = 0;
        let Subtracted_No = 0;

        for (let i = 0; i < 4; i++) {
            L = i * 2 + 1;
            X += eval(txtSIN.substring(L - 1, L));
        }

        for (let z = 1; z < 5; z++) {
            T = z * 2;
            H = eval(txtSIN.substring(T - 1, T)) * 2 + '';
            if (H.length === 2) {
                Y += parseInt(H.substring(0, 1)) + parseInt(H.substring(1, 2));
            }
            else {
                Y += parseInt(H);
            }
        }

        Sum_No = X + Y;
        Rounded_No = Math.ceil(Sum_No / 10) * 10;
        Subtracted_No = Rounded_No - Sum_No;
        if (Subtracted_No === parseInt(txtSIN.substr(8, 1))) {
            if (parseInt(txtSIN.substr(0, 1)) === 9) {
                result.status = 'temporary'
            }
            else {
                result.status = 'valid';
            }
        } else {
            result.status = 'invalid';
        }
        return result
    })

    return promise;
}
