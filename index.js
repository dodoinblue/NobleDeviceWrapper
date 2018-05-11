export class BluetoothLe {
  /*
   * Initialize BLE adapter on the current system
   * @return {Observable<any>} An Observable that fires when adapter status changes
   */
  initialize () {}

  /*
   * Enable BLE adapter
   */
  enable () {}

  /*
   * Enable BLE adapter
   */
  disable () {}

  /*
   * @return {Promise<any>} returns adapter info object
   */
  getAdapterInfo () {}

  /*
   * @param {string[]} services - An array of UUIDs of the services to look for
   */
  startScan (services) {}

  /*
   * @return {Promise<any>} returns if stopScan is successful
   */
  stopScan () {}

  /*
   * @param {string} address - The address of the device to bond to
   */
  bond (address) {}

  /*
   * @param {string} address - The address of the device to unbond
   */
  unbond (address) {}

  /*
   * @param {string} address - The address of the device to connect to
   */
  connect (address) {}

  /*
   * @param {string} address - The address of the device to disconnect
   */
  disconnect () {}

  /*
   * @param {string} address - The address of the device to discover
   */
  discover () {}

  /*
   * @param {string} address - The address of the device to read from
   * @param {string} service - The uuid of the service to read from
   * @param {string} characteristic - The uuid of the characteristic to read from
   * @return {Promise<Uint8Array>} returns data in Uint8Array format
   */
  read (address, service, characteristic) {}

  /*
   * @param {string} address - The address of the device to subscribe from
   * @param {string} service - The uuid of the service to subscribe from
   * @param {string} characteristic - The uuid of the characteristic to subscribe from
   * @return {Observable<Uint8Array>} returns data in Uint8Array format
   */
  subscribe (address, service, characteristic) {}

  /*
   * @param {string} address - The address of the device to unsubscribe from
   * @param {string} service - The uuid of the service to unsubscribe from
   * @param {string} characteristic - The uuid of the characteristic to unsubscribe from
   * @return {Promise<any>} returns if unsubscribe is done
   */
  unsubscribe (address, service, characteristic) {}

  /*
   * @param {string} address - The address of the device to write to
   * @param {string} service - The uuid of the service to write to
   * @param {string} characteristic - The uuid of the characteristic to write to
   * @param {string} payload - Payload in Uint8Array format. Should be less than 20 bytes.
   * @return {Promise<any>} returns if write is done
   */
  write (address, service, characteristic, payload) {}
}
