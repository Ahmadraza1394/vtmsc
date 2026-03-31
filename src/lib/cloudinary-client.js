// Client-side Cloudinary upload using upload preset (no API key needed)

/**
 * Upload image to Cloudinary using unsigned upload preset
 * @param {File} file - Image file to upload
 * @param {string} folder - Folder name in Cloudinary
 * @returns {Promise<object>} - Upload result
 */
export const uploadImageClient = async (file, folder = 'vtmsc') => {
  try {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'ml_default')
    formData.append('folder', folder)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )

    if (!response.ok) {
      throw new Error('Upload failed')
    }

    const result = await response.json()

    return {
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format
    }
  } catch (error) {
    console.error('Cloudinary client upload error:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * Get optimized image URL from Cloudinary
 * @param {string} publicId - Public ID of the image
 * @param {object} options - Transformation options
 * @returns {string} - Optimized image URL
 */
export const getOptimizedImageUrl = (publicId, options = {}) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  
  if (!cloudName || !publicId) {
    return '/images/default-blog.jpg'
  }

  const defaultOptions = {
    width: 800,
    height: 600,
    crop: 'fill',
    quality: 'auto:good',
    format: 'auto'
  }

  const transformOptions = { ...defaultOptions, ...options }
  const transformString = Object.entries(transformOptions)
    .map(([key, value]) => `${key}_${value}`)
    .join(',')

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${publicId}`
}
