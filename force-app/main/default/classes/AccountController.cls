public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}

/**
 * Línea 2: Anotamos el método con @AuraEnabled(cacheable=true) de modo que se almacenan los resultados en caché.
 * Línea 3: Definimos el método getAccounts en Apex, para realizar una operación de lectura y recuperar cuentas existentes.
 */