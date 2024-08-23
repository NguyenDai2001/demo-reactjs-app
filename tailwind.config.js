module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Cấu hình này sẽ quét tất cả các tệp trong thư mục `src`
    './public/index.html', // Bạn có thể thêm các tệp HTML cụ thể
  ],
  theme: {
    extend: {
      colors: {
        "bgColor": "#FFFFFF",
        "button": "#9C69E2",
        "textTitle": "#212353",
        "textPara": "#4B5D68"
      },
    },

  },
  plugins: [],
}