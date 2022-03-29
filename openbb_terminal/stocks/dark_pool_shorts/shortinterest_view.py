""" Short Interest View """
__docformat__ = "numpy"

import logging
import os

from openbb_terminal.decorators import log_start_end
from openbb_terminal.helper_funcs import export_data, print_rich_table
from openbb_terminal.rich_config import console
from openbb_terminal.stocks.dark_pool_shorts import shortinterest_model

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def high_short_interest(num: int, export: str):
    """Prints top N high shorted interest stocks from https://www.highshortinterest.com

    Parameters
    ----------
    num: int
        Number of stocks to display
    export : str
        Export dataframe data to csv,json,xlsx file
    """
    df_high_short_interest = shortinterest_model.get_high_short_interest()

    if df_high_short_interest.empty:
        console.print("No data available.", "\n")
        return

    df_high_short_interest = df_high_short_interest.iloc[1:].head(n=num)

    print_rich_table(
        df_high_short_interest,
        headers=list(df_high_short_interest.columns),
        show_index=False,
        title="Top Interest Stocks",
    )
    console.print("")

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "hsi",
        df_high_short_interest,
    )
