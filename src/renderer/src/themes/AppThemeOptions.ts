import { ThemeOptions } from '@mui/material/styles'

type Props = {
  themeLanguage: string
}

export const createLightTheme = ({ themeLanguage }: Props): ThemeOptions => {
  return {
    palette: {
      mode: 'light',
      primary: {
        main: '#a40319'
      },
      secondary: {
        main: '#fdab34'
      },
      background: {
        default: '#f5f5fa',
        paper: '#f0f0f5'
      },
      text: {
        primary: '#1c1b1b',
        secondary: '#535252'
      }
    },
    shape: {
      borderRadius: 8
    },
    typography: {
      fontFamily: themeLanguage === 'en' ? 'Roboto' : 'Tajawal'
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            //maxWidth: '240px',
            //inWidth: '80px',
            backgroundColor: '#f3f3f7',
            borderRadius: 8,
            '& .MuiOutlinedInput-root': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fdd396'
              },
              '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fdd396',
                  borderWidth: '1px'
                }
              },
              '&.Mui-error': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff1744'
                }
              }
            },
            '& .MuiInputLabel-outlined': {
              color: '#b18c56',
              fontSize: '14px',
              '&.Mui-focused': {
                color: '#b18c56',
                fontWeight: 'bold',
                fontSize: '14px'
              },
              '&.Mui-error': {
                color: '#b7b7b7'
              }
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            //maxWidth: '240px',
            //inWidth: '80px',
            backgroundColor: '#f3f3f7',
            borderRadius: 10,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fdd396'
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fdd396',
                borderWidth: '1px'
              }
            },
            '&.Mui-error': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ff1744'
              }
            }
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: '#808080',
            fontSize: '12px',
            '&.Mui-focused': {
              color: '#808080',
              //fontWeight: 'bold',
              fontSize: '12px'
            },
            '&.Mui-error': {
              color: '#b7b7b7'
            }
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: '#fdd396',
            '&.Mui-checked': {
              color: '#b18c56'
            }
          }
        }
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            //minWidth: '240px',
            backgroundColor: '#f3f3f7',
            borderRadius: 8,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fdd396'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fdd396'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fdd396'
            }
          },
          select: {
            backgroundColor: '#f3f3f7',
            '&:focus': {
              backgroundColor: '#f3f3f7'
            }
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#b18c56',
            '&.Mui-selected': {
              color: '#b18c56'
              //fontWeight: 'bold',
            }
          }
        }
      }
    }
  }
}

export const createDarkTheme = ({ themeLanguage }: Props): ThemeOptions => {
  return {
    palette: {
      mode: 'dark',
      primary: {
        main: '#a40319'
      },
      secondary: {
        main: '#fdab34'
      },
      background: {
        default: '#292727',
        paper: '#1f1c1c'
      },
      text: {
        primary: '#f5f5fa',
        secondary: '#f0f0f5'
      }
    },
    shape: {
      borderRadius: 8
    },
    typography: {
      fontFamily: themeLanguage === 'en' ? 'Roboto' : 'Tajawal'
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            // width: '240px',
            backgroundColor: '#4b4949',
            borderRadius: 8,
            '& .MuiOutlinedInput-root': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fdd396'
              },
              '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#fdd396',
                  borderWidth: '1px'
                }
              },
              '&.Mui-error': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ff1744'
                }
              }
            },
            '& .MuiInputLabel-outlined': {
              color: '#b18c56',
              fontSize: '14px',
              '&.Mui-focused': {
                color: '#b18c56',
                fontWeight: 'bold',
                fontSize: '14px'
              },
              '&.Mui-error': {
                color: '#b7b7b7'
              }
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            //maxWidth: '240px',
            //inWidth: '80px',
            backgroundColor: '#4b4949',
            borderRadius: 10,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fdd396'
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fdd396',
                borderWidth: '1px'
              }
            },
            '&.Mui-error': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ff1744'
              }
            }
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: '#b18c56',
            fontSize: '14px',
            '&.Mui-focused': {
              color: '#b18c56',
              //fontWeight: 'bold',
              fontSize: '14px'
            },
            '&.Mui-error': {
              color: '#b7b7b7'
            }
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: '#fdd396',
            '&.Mui-checked': {
              color: '#b18c56'
            }
          }
        }
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            //minWidth: '240px',
            backgroundColor: '#4b4949',
            borderRadius: 8,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fdd396'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fdd396'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fdd396'
            }
          },
          select: {
            backgroundColor: '#4b4949',
            '&:focus': {
              backgroundColor: '#4b4949'
            }
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#b18c56',
            '&.Mui-selected': {
              color: '#fdd396'
              //fontWeight: 'bold',
            }
          }
        }
      }
    }
  }
}
