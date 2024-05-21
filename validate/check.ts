class Check {
  constructor() {}

  public static isNull(checking_value: string): boolean {
    if (
      checking_value == null ||
      checking_value == undefined ||
      checking_value === ''
    ) {
      return true;
    } else {
      return false;
    }
  }

}

export { Check };