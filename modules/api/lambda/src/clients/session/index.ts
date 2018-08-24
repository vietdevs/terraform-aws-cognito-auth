/*
 * Copyright (c) 2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { Client } from "clients"

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

/**
 * Session client
 */
export class SessionClient extends Client {

  /**
   * Initialize session client
   *
   * @param token - Access token
   */
  public constructor(
    protected token: string
  ) {
    super()
  }

  /**
   * Change password for current user
   *
   * @param previous - Previous password
   * @param proposed - Proposed password
   *
   * @return Promise resolving with no result
   */
  public async changePassword(
    previous: string, proposed: string
  ): Promise<void> {
    await this.cognito.changePassword({
      AccessToken: this.token,
      PreviousPassword: previous,
      ProposedPassword: proposed
    }).promise()
  }

  /**
   * Terminate session for current user
   */
  public async signOut() {
    await this.cognito.globalSignOut({
      AccessToken: this.token
    }).promise()
  }
}