const BYTE_SIZE_IN_BITS: number = 8;

/**
 * Map boolean information into a compact bit representation
 */
export default class BitMap {
  private arr: Int8Array;

  constructor(private size: number) {
    const bytesCount = Math.ceil(size / BYTE_SIZE_IN_BITS);
    const buffer = new ArrayBuffer(bytesCount);
    this.arr = new Int8Array(buffer);
  }

  set(n: number) {
    this.checkValidInput(n);

    const byte = this.getByteIndex(n);
    const bit = this.getBitIndex(n);
    this.setBitInByte(byte, bit);
  }

  unset(n: number) {
    this.checkValidInput(n);

    const byte = this.getByteIndex(n);
    const bit = this.getBitIndex(n);
    this.unsetBitInByte(byte, bit);
  }

  isSet(n: number) {
    this.checkValidInput(n);

    const byte = this.getByteIndex(n);
    const bit = this.getBitIndex(n);
    return Boolean(this.getBitInByte(byte, bit));
  }

  private setBitInByte(byte: number, bit: number) {
    const mask = 0b00000001 << bit;
    this.arr[byte] |= mask;
  }

  private unsetBitInByte(byte: number, bit: number) {
    const mask = 0b11111110 << bit;
    this.arr[byte] &= mask;
  }

  private getBitInByte(byte: number, bit: number) {
    const mask = 0b00000001 << bit;
    return this.arr[byte] & mask ? 1 : 0;
  }

  private getByteIndex(n: number) {
    return Math.floor(n / BYTE_SIZE_IN_BITS);
  }

  private getBitIndex(n: number) {
    return n % BYTE_SIZE_IN_BITS;
  }

  private checkValidInput(n: number) {
    if (n >= this.size) {
      throw "out of bounds";
    }
  }
}
