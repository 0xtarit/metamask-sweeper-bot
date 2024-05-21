class Config {

  constructor() {}

  public static config(variables: Record<string, any>): { status: boolean; configDetails?: Record<string, any>; error?: string;} 
  {
    let required_variables = [
      'target_wallet_private_key',
      'recipient_address',
      'telegram_user_id',
      'telegram_bot_token',
      'network_name'
    ];

    if (typeof variables !== 'object') {
      console.log('Please provide credentials details in object format.');
      return {
        status: false,
        error: 'Please provide credentials details in object format',
      };
    }

    let optionals_variable = [
      { key: 'server_port', defaultValue: 8080 },
      { key: 'extra_gas_fee', defaultValue: 1 },
      { key: 'gas_limit', defaultValue: 21000 },
    ];

    // Check and set default values for optional variables
    optionals_variable.forEach((opt) => {
      if ( !(opt.key in variables) || variables[opt.key] === undefined || variables[opt.key] === null ) {
        variables[opt.key] = opt.defaultValue;
      }
    });

    // Check for presence of required variables
    for (const key of required_variables) {
      if (!(key in variables) || variables[key].trim() === undefined || variables[key].trim() === null || variables[key].trim() === '' ) {
        let errorMessage = `Please provide ${key} value.`;
        console.log(errorMessage);
        return { status: false, error: errorMessage };
      }
    }

    // Combine provided variables with defaults and return
    const finalConfigDetails = { ...variables };
    optionals_variable.forEach((opt) => {
      if (!(opt.key in finalConfigDetails)) {
        finalConfigDetails[opt.key] = opt.defaultValue;
      }
    });

    return { status: true, configDetails: finalConfigDetails };
    
  }
  
}

export { Config };
