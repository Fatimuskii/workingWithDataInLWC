import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName, type: 'currency' },
    { label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text' }
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
}

/**
 * Línea 2 a 4: Importamos referencias de campo, al igual que en los pasos anteriores.
 * Línea 5: Importamos la función getAccounts desde la clase AccountController.
 * Línea 13: Utilizamos @wire con la función getAccounts para recuperar los datos.
 * Línea 14: Almacenamos le resultado en la propiedad accounts. Si la operación se realiza correctamente, los registros son accesibles en accounts.data. Si falla, el error aflora en accounts.error.
 */