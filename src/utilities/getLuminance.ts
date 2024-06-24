export const getLuminance = (hex: string): number => {
    const rgb = parseInt(hex.slice((1), 16))
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const SRGB = [r, g, b].map((value) => {
        value /= 255
        return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * SRGB[0] + 0.7152 * SRGB[1] + 0.0722 * SRGB[2]
} 