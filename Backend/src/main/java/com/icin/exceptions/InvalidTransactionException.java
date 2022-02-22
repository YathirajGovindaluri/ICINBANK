package com.icin.exceptions;

/**
 * Exception thrown when the bank transactio is invalid
 *
 */
@SuppressWarnings("serial")
public class InvalidTransactionException extends RuntimeException {

    public InvalidTransactionException(String message) {
        super(message);
    }
}
