/**
 * @fileoverview
 * @version 1.0.0
 * @module responseHelper
 */
import { HttpStatusCode } from 'axios';
import { Response } from 'express';

export default class ResponseHelper {
  private _unprocessableErrorMsg = 'Sorry, no payload data.';
  serviceName: string;

  unprocessableEntity(res: Response) {
    res
      .status(HttpStatusCode.UnprocessableEntity)
      .json(
        this._formatResponse(
          HttpStatusCode.UnprocessableEntity,
          this._unprocessableErrorMsg
        )
      );
  }

  response(res: Response, code: HttpStatusCode, payload: unknown) {
    res.status(code).json(this._formatResponse(code, payload));
  }

  error(res: Response, code: HttpStatusCode, message: string) {
    res.status(code).json({
      code: code,
      payload: {
        error: {
          message: message,
          type: this.serviceName,
        },
      },
    });
  }

  private _formatResponse(code: HttpStatusCode, payload: unknown) {
    return {
      code: code,
      payload: payload,
    };
  }
}
