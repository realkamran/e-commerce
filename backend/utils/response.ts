/**
 * @desc    This file contain Success and Error response for sending to client / user
 */

/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} data
 * @param   {number} statusCode
 */
export const success = (
  statusCode: number,
  message: string,
  data: object | Array<any>
) => {
  return {
    message,
    error: false,
    code: statusCode,
    data,
  };
};

/**
 * @desc    Send any error response
 *
 * @param   {string} message
 * @param   {number} statusCode
 */
export const error = (statusCode: number, message: string) => {
  // List of common HTTP request code
  const codes = [200, 201, 400, 401, 404, 403, 422, 500];

  // Get matched code
  const findCode = codes.find((code) => code == statusCode);

  if (!findCode) statusCode = 500;
  else statusCode = findCode;

  return {
    message,
    code: statusCode,
    error: true,
  };
};

/**
 * @desc    Send any validation response
 *
 * @param   {object | array} errors
 */
export const validation = (errors: any[]) => {
  return {
    message: "Validation errors",
    error: true,
    code: 422,
    errors,
  };
};
