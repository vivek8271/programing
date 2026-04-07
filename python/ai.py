import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
# Load data
df = pd.read_csv("stock_data.csv")

# Basic info
print(df.head())

# Add moving average
df['MA_5'] = df['Close'].rolling(window=5).mean()

# Add returns
df['Returns'] = df['Close'].pct_change()

# Stats
print("Average Return:", df['Returns'].mean())
print("Volatility:", df['Returns'].std())


plt.plot(df['Close'], label='Price')
plt.plot(df['MA_5'], label='MA 5')

plt.legend()
plt.title("Stock Price Analysis")
plt.show()